<template>
    <div class="pageDetail container" style="max-width: 60%">
        <SocialHeader title="어셈블하기" />
        <div>
            <div class="row" style="display: flex; margin-top: 40px">
                <SocialCard
                    class="col-4"
                    style="width: 32%"
                    v-for="(social, index) in socials"
                    :key="index"
                    :social="social"
                />
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
import SocialHeader from "@/components/Social/SocialHeader.vue";
import { ref } from "vue";

function getSocialData(ctno) {
    const interest = ref([
        {
            stitle: "어셈블 이름1",
            saddress: "주소1",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름2",
            saddress: "주소2",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름3",
            saddress: "주소3",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름4",
            saddress: "주소4",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름5",
            saddress: "주소5",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름6",
            saddress: "주소6",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름7",
            saddress: "주소7",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름8",
            saddress: "주소8",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름9",
            saddress: "주소9",
            sfee: "50000",
        },
    ]);

    return interest;
}

const socials = getSocialData(1);
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
