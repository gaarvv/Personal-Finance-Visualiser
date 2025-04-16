import dbConnect from '@/lib/mongodb';
import Transaction from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  await dbConnect();
  const data = await req.json();
  const updated = await Transaction.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  await Transaction.findByIdAndDelete(params.id);
  return NextResponse.json({ message: 'Deleted' });
}
