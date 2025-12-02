import { NextRequest, NextResponse } from "next/server";

// GET /api/hello
export async function GET(req: NextRequest) {
  return NextResponse.json({
    message: "hello from mock backend",
    timestamp: new Date().toISOString(),
  });
}