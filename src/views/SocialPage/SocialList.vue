<template>
    <div class="pageDetail container" style="max-width: 60%">
        <h3 style="margin-bottom: 40px">
            <span style="font-weight: 600">어셈블 하기</span>
        </h3>
        <div class="pageCategory container">
            <div class="wrapper">
                <div class="pageOption">
                    <div class="dropdown">
                        <button
                            class="btn btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            카테고리
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">전체보기</a></li>
                            <li><a class="dropdown-item" href="#">맛집</a></li>
                            <li><a class="dropdown-item" href="#">운동</a></li>
                            <li><a class="dropdown-item" href="#">스터디</a></li>
                            <li><a class="dropdown-item" href="#">친목</a></li>
                        </ul>
                    </div>
                    <div class="dropdown ms-2">
                        <button
                            class="btn btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            정렬
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">최신순</a></li>
                            <li><a class="dropdown-item" href="#">마감임박순</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="row" style="display: flex; margin-top: 40px">
                <SocialCard class="col-4" style="width: 32%" v-for="n in 9" :key="n" />
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center" style="border: none">
                <li class="page">
                    <a class="page-link text-black" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page"><a class="page-link text-black" href="#">1</a></li>
                <li class="page"><a class="page-link text-black" href="#">2</a></li>
                <li class="page"><a class="page-link text-black" href="#">3</a></li>
                <li class="page">
                    <a class="page-link text-black" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";
</script>

<style scoped>
/* 페이지 리스트 */
.pageDetail {
    min-height: 600px;
    justify-content: normal;
    margin-top: 60px;
}
.pageOption {
    flex-wrap: wrap;
    display: flex;
}
.pageCategory {
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    display: flex;
    padding: 0;
}
.wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

/* 이미지 리스트 */
.main_styles {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    justify-content: space-between;
}
.main_styles > img {
    height: 250px;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
}
.main_category {
    text-decoration-line: none;
    color: black;
    margin-bottom: 30px;
    min-width: 150px;
}
.main_text > h3 {
    font-size: 17px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.main_text > h5 {
    font-size: 14px;
    height: 54px;
    overflow: hidden;
    height: 2.4em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.caption > p {
    font-size: 12px;
    color: gray;
    margin-bottom: 0px;
}
.main_additional {
    border-top: 1px solid #ddd;
}
.btn {
    background-color: #558ccf;
    color: white;
}
</style>
