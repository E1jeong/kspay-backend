import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    orderId: string;
  };
};

// 결제 결과 조회 API (Mock)
// GET /api/payments/{orderId}
export async function GET(req: NextRequest, { params }: Params) {
  const { orderId } = params;

  // 지금은 무조건 SUCCESS로 가정하는 Mock
  // 나중에 여기서 DB 조회해서 실제 status/금액/승인번호 내려주면 됨
  return NextResponse.json({
    orderId,
    status: "SUCCESS", // or "FAILED", "PENDING"
    amount: 10000,
    approvalNo: "MOCK-APPROVAL-123456",
    approvedAt: new Date().toISOString(),
    message: "Mock 결제 성공입니다.",
  });
}
