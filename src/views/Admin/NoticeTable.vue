<template>
    <div class="p-3 mt-4">
        <h4>공지사항 관리</h4>
        <table class="table table-bordered text-center">
            <tr style="height: 50px">
                <th style="width: 40px">번호</th>
                <th style="width: 220px">제목</th>
                <th style="width: 40px">날짜</th>
                <th style="width: 40px">작성자</th>
                <th style="width: 40px">관리</th>
            </tr>
            <tr>
                <td>1</td>
                <td><RouterLink to="">후기 작성 및 이벤트 참여 관련</RouterLink></td>
                <td>24.06.17</td>
                <td>user1@naver.com</td>
                <td class="d-flex justify-content-center">
                    <RouterLink to="">
                        <button class="btn btn-outline-success btn-md">수정하기</button>
                    </RouterLink>
                    <div>
                        <button class="btn btn-outline-danger btn-md">삭제하기</button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup></script>

<style scoped>
img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
}
</style>
