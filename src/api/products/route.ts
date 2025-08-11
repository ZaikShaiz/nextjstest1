import { NextResponse } from 'next/server';

let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 600 },
  { id: 3, name: 'Watch', price: 200 },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const newProd = await req.json();
  newProd.id = products.length + 1;
  products.push(newProd);
  return NextResponse.json(newProd, { status: 201 });
}