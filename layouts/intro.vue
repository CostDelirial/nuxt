<template>
  <div>
    <header>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <div>
        <span>username</span>
      </div>
    </header>
    <main>
      <aside>Sidebar</aside>
      <nuxt />
    </main>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
header {
  background-color: #cbd5e0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
}
main {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  min-height: calc(100vh - (4rem + 2rem));
}

aside {
  background-color: #edf2f7;
  width: 320px;
}

span {
  margin: 0 0.5rem;
}
img {
  display: block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
</style>
