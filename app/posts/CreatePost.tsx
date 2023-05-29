'use client';

// React와 React의 useState 훅을 import 합니다.
import React, {useState} from "react";
import { useRouter } from "next/navigation";
// CreatePost라는 함수형 컴포넌트를 선언합니다.
const CreatePost = () => {
    // useState 훅을 이용하여 제목(title)에 대한 상태를 관리합니다. 초기값은 빈 문자열("")입니다.
    const [title, setTitle] = useState("")
    const router = useRouter();
    // 폼 제출을 처리하는 함수를 선언합니다.
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // 폼 제출의 기본 동작을 취소합니다. (페이지 리로딩 방지)
        e.preventDefault();
        // fetch 함수를 사용하여 서버에 POST 요청을 보냅니다.
        await fetch('http://127.0.0.1:8090/api/collections/posts/records', {
            method:'POST', // 요청 방식을 POST로 설정합니다.
            headers: { 'Content-Type': 'application/json'}, // 요청 헤더에 Content-Type을 application/json으로 설정합니다.
            body:JSON. stringify({ // 요청 본문에 제목(title)을 JSON 형식의 문자열로 변환하여 전송합니다.
                title
            })
        })
        // 요청이 완료되면 제목(title) 상태를 초기화합니다.
        setTitle('');
        router.refresh(); 
    }

    // 컴포넌트 렌더링
    return (
        <form onSubmit={handleSubmit}> {/* 폼 제출 이벤트가 발생하면 handleSubmit 함수를 호출합니다. */}
            <input
                type="text" // 입력 필드 타입을 텍스트로 설정합니다.
                placeholder="Title" // 입력 필드의 플레이스홀더를 "Title"로 설정합니다.
                value={title} // 입력 필드의 값으로 제목(title) 상태를 설정합니다.
                onChange={(e) => setTitle(e.target.value)} // 입력 값이 변경되면 제목(title) 상태를 업데이트합니다.
            />
            <button type="submit"> {/* 폼 제출 버튼을 생성합니다. */}
                Create Post
            </button>
        </form>
    )
}

// CreatePost 컴포넌트를 내보냅니다.
export default CreatePost
