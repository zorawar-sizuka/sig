// api/admin/bulk/route.js (NEW FILE - handles bulk delete for all leads types)
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const dynamic = 'force-dynamic';

async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return { ok: false, res: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  if (session.user.role !== "ADMIN") {
    return { ok: false, res: NextResponse.json({ error: "Forbidden" }, { status: 403 }) };
  }

  return { ok: true, session };
}

export async function DELETE(req) {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.res;

  try {
    const { type, ids } = await req.json(); // e.g., { type: 'bookings', ids: [1,2,3] }

    if (!type || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Type and valid IDs required' }, { status: 400 });
    }

    // Map type to Prisma model
    const modelMap = {
      bookings: 'booking',
      inquiries: 'inquiry',
      contacts: 'contact',
      registrations: 'eventRegistration',
      subscribers: 'subscriber',
    };

    const modelName = modelMap[type];
    if (!modelName) {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    // Bulk delete
    const deleted = await prisma[modelName].deleteMany({
      where: { id: { in: ids } },
    });

    return NextResponse.json({ success: true, deletedCount: deleted.count });
  } catch (error) {
    console.error('Bulk Delete Error:', error);
    return NextResponse.json({ error: 'Failed to delete items' }, { status: 500 });
  }
}