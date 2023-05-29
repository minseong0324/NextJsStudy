// getPost 함수를 선언합니다. 이 함수는 특정 ID에 해당하는 게시물 데이터를 API에서 가져옵니다.
async function getPost(postId:string) {
    // fetch를 사용하여 해당 ID의 게시물 데이터를 API에서 가져옵니다.
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
        // revalidate 옵션을 설정하여, 이 데이터가 10초 후에 재검증되도록 합니다. 
        { next: { revalidate: 10 } }
    )

    if(!res.ok) {
        //가장 가까이에 있는 error.js   activated 
        throw new Error('Failed to fetch data');
    }
    // API 응답을 JSON 형식으로 파싱합니다.
    const data = await res.json();
    // 파싱된 데이터를 반환합니다.
    return data;
}

// 비동기 함수인 PostDetailPage 컴포넌트를 선언합니다. 
const PostDetailPage = async ({params}: any) => {
    // getPost 함수를 호출하여 특정 게시물 데이터를 가져옵니다.
    const post = await getPost(params.id);
    // 게시물 데이터를 활용하여 게시물 세부 정보를 렌더링합니다.
    return (
        <div>
            <h1>posts/{post.id}</h1>
            <div>
                <h3>{post.title}</h3>
                <p>{post.created}</p>
            </div>
        </div>
    )
    // <h1> 게시물의 id를 이용하여 헤더를 생성합니다.
     // <h3> 게시물의 제목을 표시합니다.
     // <p> 게시물의 생성 날짜를 표시합니다.
}

// PostDetailPage 컴포넌트를 기본으로 내보냅니다.
export default PostDetailPage
