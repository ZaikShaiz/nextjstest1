export async function fetchProducts() {
  const res = await fetch('/api/products');
  return res.json();
}

export async function addProduct(product: { name: string; price: number }) {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(product)
  });
  return res.json();
}