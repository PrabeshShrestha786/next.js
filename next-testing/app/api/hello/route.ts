// SIMPLE VERSION - Use native Response instead of NextResponse
export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Hello World' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
}