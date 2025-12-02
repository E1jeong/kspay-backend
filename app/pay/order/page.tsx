import Link from "next/link";

type OrderPageProps = {
  searchParams: {
    orderId?: string;
    amount?: string;
  };
};

// kspay_wh_order 역할을 하는 페이지 (Mock 버전)
export default function OrderPage({ searchParams }: OrderPageProps) {
  const orderId = searchParams.orderId ?? "TEST-ORDER-001";
  const amount = searchParams.amount ?? "1000";

  return (
    <main style={{ padding: 20 }}>
      <h1>결제 시작 (Mock)</h1>

      <p>주문번호: {orderId}</p>
      <p>결제금액: {amount}원</p>

      {/* 여기 나중에 KSNET 결제창 호출용 form/JS 들어갈 예정 */}
      <p style={{ marginTop: 20 }}>
        아래 버튼을 누르면, 결제가 완료되었다고 가정하고 결과 페이지로 이동합니다.
      </p>

      <Link
        href={`/pay/result?orderId=${encodeURIComponent(
          orderId
        )}&amount=${encodeURIComponent(amount)}&status=SUCCESS`}
        style={{
          display: "inline-block",
          marginTop: 16,
          padding: "8px 16px",
          border: "1px solid #333",
          borderRadius: 4,
          textDecoration: "none",
        }}
      >
        결제 진행 (모의)
      </Link>
    </main>
  );
}