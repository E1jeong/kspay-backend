type ResultPageProps = {
  searchParams: {
    orderId?: string;
    amount?: string;
    status?: string;
    message?: string;
  };
};

// kspay_wh_result 역할을 하는 페이지 (Mock 버전)
export default function ResultPage({ searchParams }: ResultPageProps) {
  const orderId = searchParams.orderId ?? "UNKNOWN";
  const amount = searchParams.amount ?? "0";
  const status = searchParams.status ?? "UNKNOWN";
  const message =
    searchParams.message ??
    (status === "SUCCESS" ? "결제가 정상적으로 완료되었습니다." : "결제가 실패했거나 취소되었습니다.");

  const isSuccess = status === "SUCCESS";

  return (
    <main style={{ padding: 20 }}>
      <h1>결제 결과 (Mock)</h1>

      <p>주문번호: {orderId}</p>
      <p>금액: {amount}원</p>
      <p>상태: {isSuccess ? "성공" : "실패/취소"}</p>
      <p>메시지: {message}</p>
    </main>
  );
}