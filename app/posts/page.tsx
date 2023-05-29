// Next.js에서 제공하는 Link 컴포넌트를 import합니다.
import Link from "next/link";
import CreatePost from "./CreatePost";


// 비동기 함수 getPost를 선언합니다. 이 함수는 게시물 데이터를 API에서 가져옵니다.
async function getPost() {
    // fetch를 사용하여 API에서 데이터를 가져옵니다.
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records',
    {cache : 'no-store'});
    // API 응답을 JSON 형식으로 파싱합니다.
    const data = await res.json();
    // 파싱된 데이터에서 items를 반환합니다. 만약 items가 없다면 빈 배열을 반환합니다.
    return data?.items as any[];
}

// 비동기 함수인 PostsPage 컴포넌트를 선언합니다. 
const PostsPage = async () => {
    // getPost 함수를 호출하여 게시물 데이터를 가져옵니다.
    const posts = await getPost();

    // 게시물 데이터를 활용하여 렌더링합니다.
    return (
        <div>
            <h1>Posts</h1>
            { // 각각의 게시물을 PostItem 컴포넌트로 렌더링합니다.
            posts?.map((post) => {
                return <PostItem key={post.id} post={post}/>
            })}
            <CreatePost />
        </div>
    )
}

// PostItem 컴포넌트를 선언합니다. 이 컴포넌트는 개별 게시물을 렌더링합니다.
const PostItem = ({ post }: any) => {
    // post 객체에서 필요한 프로퍼티를 추출합니다.
    const { id, title, created } = post || {};

    // 추출한 데이터를 활용하여 렌더링합니다. 각 게시물은 Link 컴포넌트를 활용하여 동적 라우팅을 가능하게 합니다.
    return (
        <Link href={`/posts/${id}`}>
            <div>
                <h3>{title}</h3>
                <p>{created}</p>
            </div>
        </Link>
    )
}

// PostsPage 컴포넌트를 기본으로 내보냅니다.
export default PostsPage
