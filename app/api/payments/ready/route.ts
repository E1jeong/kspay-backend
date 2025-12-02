import { NextRequest, NextResponse } from "next/server";

// 결제창 호출용 URL(payUrl) 생성 API (Mock)
// POST /api/payments/ready
// body: { orderId: string, amount: number }
export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { orderId, amount } = body ?? {};

  if (!orderId || typeof orderId !== "string") {
    return NextResponse.json(
      { error: "orderId(string) is required" },
      { status: 400 }
    );
  }

  if (!amount || typeof amount !== "number") {
    return NextResponse.json(
      { error: "amount(number) is required" },
      { status: 400 }
    );
  }

  // 현재 요청의 origin (http://localhost:3000, https://xxx.vercel.app 등)
  const origin = req.nextUrl.origin;

  // 지금은 Mock이라 /pay/order?orderId=...&amount=... 으로 연결
  // 나중에 여기에 KSNET 파라미터 추가 / form 페이지로 변경
  const payUrl = `${origin}/pay/order?orderId=${encodeURIComponent(
    orderId
  )}&amount=${encodeURIComponent(String(amount))}`;

  return NextResponse.json({
    orderId,
    amount,
    payUrl,
  });
}
