<template>
    <div class="p-3 mt-4">
        <h4>후기 관리</h4>
        <table class="table table-bordered text-center">
            <tr style="height: 50px">
                <th style="width: 40px">번호</th>
                <th style="width: 200px">참여한 소셜링</th>
                <th style="width: 200px">제목</th>
                <th style="width: 40px">날짜</th>
                <th style="width: 40px">작성자</th>
                <th style="width: 40px">관리</th>
            </tr>
            <tr>
                <td>1</td>
                <td><RouterLink to="">참여한 소셜링</RouterLink></td>
                <td><RouterLink to="">너무 재밌었어요~</RouterLink></td>
                <td>24.06.17</td>
                <td>김명환</td>
                <td class="d-flex justify-content-center">
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
