<template>
    <div class="p-3">
        <h4>회원 관리</h4>
        <table class="table table-bordered text-center">
            <tr style="height: 50px;">
                <th style="width: 40px">번호</th>
                <th style="width: 40px">프로필</th>
                <th style="width: 80px">아이디</th>
                <th style="width: 80px">비밀번호</th>
                <th style="width: 80px">가입일</th>
                <th style="width: 80px">관리</th>
            </tr>
            <tr>
                <td>1</td>
                <td><img src="../../assets/admin.png" /></td>
                <td>user1@naver.com</td>
                <td>12345</td>
                <td>24.06.17</td>
                <td class="d-flex justify-content-center">
                    <div>
                        <button class="btn btn-outline-success btn-sm me-2">상세보기</button>
                    </div>
                    <div>
                        <button class="btn btn-outline-danger btn-sm">비활성화</button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup></script>

<style scoped>
img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
</style>
