import { NextRequest, NextResponse } from "next/server";

// 주문 생성 API (Mock)
// POST /api/orders
// body: { amount: number, goodName?: string, orderName?: string }
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

  const { amount, goodName, orderName } = body ?? {};

  if (!amount || typeof amount !== "number") {
    return NextResponse.json(
      { error: "amount(number) is required" },
      { status: 400 }
    );
  }

  // 간단한 Mock orderId 생성
  const orderId = `TEST-${Date.now()}`;

  // 실제로는 DB에 저장해야 하지만
  // 지금은 Mock이니까 그대로 리턴만 한다
  return NextResponse.json({
    orderId,
    amount,
    goodName: goodName ?? "상품명 미지정",
    orderName: orderName ?? "주문자 미지정",
  });
}
