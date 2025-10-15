import { NextRequest, NextResponse } from 'next/server';

// 메모리에 결과 저장 (실제로는 데이터베이스 사용 권장)
const resultsStore = new Map<string, any>();

// 고유 ID 생성
function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// POST: 결과 저장
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, percentages } = body;

    if (!type || !percentages) {
      return NextResponse.json(
        { error: 'type과 percentages가 필요합니다' },
        { status: 400 }
      );
    }

    const id = generateId();
    resultsStore.set(id, { type, percentages, createdAt: Date.now() });

    return NextResponse.json({ id });
  } catch (error) {
    return NextResponse.json(
      { error: '결과 저장 실패' },
      { status: 500 }
    );
  }
}

// GET: 결과 조회
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { error: 'id가 필요합니다' },
      { status: 400 }
    );
  }

  const result = resultsStore.get(id);

  if (!result) {
    return NextResponse.json(
      { error: '결과를 찾을 수 없습니다' },
      { status: 404 }
    );
  }

  return NextResponse.json(result);
}
