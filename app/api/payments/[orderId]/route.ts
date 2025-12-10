import { NextRequest, NextResponse } from "next/server";

// Next가 기대하는 형태:
// (request: NextRequest, context: { params: Promise<{ orderId: string }> })
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> },
) {
  // context.params 가 Promise 라고 타입이 잡혀 있으니까 await 한 뒤 꺼내기
  const { orderId } = await context.params;

  // TODO: 여기서 실제로는 DB나 KSNET 결과를 조회해야 함
  // 지금은 mock 데이터 리턴
  const mockResult = {
    orderId,
    status: "SUCCESS",      // "SUCCESS" | "FAILED" | "PENDING"
    amount: 1000,
    approvalNo: "A123456789",
    approvedAt: new Date().toISOString(),
    message: "테스트 결제 성공",
  };

  return NextResponse.json(mockResult);
}
