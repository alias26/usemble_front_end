<template>
    <div class="p-3">
        <h4>회원 상세</h4>
        <table class="table text-center">
            <tbody class="d-flex">
                <tr class="border">
                    <td>이름</td>
                    <td>아이디</td>
                    <td>비밀번호</td>
                    <td>휴대전화</td>
                    <td>주민번호</td>
                    <td>성별</td>
                    <td>은행명</td>
                    <td>계좌번호</td>
                </tr>
                <tr class="border">
                    <td>감자바</td>
                    <td>user1@naver.com</td>
                    <td>12345</td>
                    <td>010-1234-1234</td>
                    <td>990302-1******</td>
                    <td>남성</td>
                    <td>우리</td>
                    <td>132483-1234380</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup></script>

<style scoped>
.table {
    display: -webkit-box;
    display: -ms-flexbox;
    overflow-x: auto;
    overflow-y: hidden;
}

th,
td {
    display: block;
}
tr {
    width: 50%;
}
</style>
