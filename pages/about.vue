<template>
  <Head>
    <Title>About | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'About | ' + $config.projectMetadataTitle" />
  </Head>

  <div class="card border scroll-500">
    <div class="card-body">
      <p class="fs-3" @click="$router.back()">
        <i class="bi bi-arrow-left-circle cursor-pointer"></i>
      </p>

      <h3 class="mb-3 mt-3">Welcome to the future.</h3>

      <p class="text-break mt-3">
        BasePunk is presenting a new way of social media. A web3 social network built on top of decentralized technologies
        such as 
        <a href="https://base.org/" target="_blank">Base</a>, 
        <a href="https://ipfs.tech/" target="_blank">IPFS</a>, 
        <a href="https://ceramic.network/" target="_blank">Ceramic Network</a>, 
        <a href="https://useorbis.com/" target="_blank">Orbis</a>, 
        <a href="https://punk.domains/" target="_blank">Punk Domains</a>, and
        <a href="https://iggy.social/" target="_blank">Iggy Social</a>.
      </p>

      <p class="text-break mt-3">
        Web3 Social is a place where social media is fully decentralized, permissionless and all the data is owned by users. 
        The way it should be.
      </p>

      <p class="text-break mt-3">
        Let's leave the old world of corporation-controlled social media behind us and move towards a decentralized basepunk future. 
        We promise, it's going to be a lot of fun!
      </p>

      <h5>Links</h5>

      <ul>
        <li><a href="https://discord.gg/basepunk" target="_blank">Discord</a></li>
        <li><a href="https://twitter.com/Punkonbase" target="_blank">Twitter</a></li>
        <li><a href="https://medium.com/@punkonbase/" target="_blank">Blog</a></li>
        <li><a href="https://github.com/BasePunkOrg" target="_blank">GitHub</a></li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>