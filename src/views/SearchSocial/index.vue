<template>
    <div>
        <div class="navigation" style="height: 700px;">
            <div>
                <div class="searchMenu-bar">
                    <form action="./list">
                        <div class="searchMenu">
                            <div class="searchMenu-wrapper mt-3" style="height: 100px; width: 70%; margin: auto; display: flex; align-items: center; border-bottom: solid 1px;" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                                    <input class="search ms-3" type="search" placeholder="검색어를 입력해주세요" 
                                    style="width:100%; height: 70px;  border: 0; font-size: 20px;">
                            </div>
                        </div>
                    </form>
                    <div class="searchResults">
                        <div class="searchList">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
input:focus {
  outline: none;
}

</style>