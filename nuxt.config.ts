import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://nuxt.com/docs/api/configuration/nuxt-config 
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        { // Bootstrap
          rel: "stylesheet",
          href: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        },
        { // Bootstrap icons
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        },
        { // Custom
          rel: "stylesheet",
          href: "/css/custom.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  components: false,
  css: [
    'vue-toastification/dist/index.css' 
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  router: {
    options: {
      hashMode: false
    }
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: "0x148088d4255C59E1088e37E7c2FE56F11e4c4f29",
      activityPointsRatio: 10_000, 
      airdropApAddress: "", // chat token claim for APs
      airdropClaimDomainsAddress: "", // chat token claim for domain holders
      blockExplorerBaseUrl: "https://basescan.org",
      chatTokenAddress: "", // chat token address
      chatTokenImage: "", // chat token image
      chatTokenSymbol: "", // chat token symbol or name
      domainRequiredToPost: true,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      favicon: "/img/favicon.png",
      getPostsLimit: 30, // number of posts to fetch from Orbis in the getPosts() function
      governanceUrl: "", // governance url (snapshot, Tally, etc.)
      iggyPostAddress: "0x8032d7a2b57B3F46861b0A46cE43DEc8281471C5",
      iggyPostMinterAddress: "0x3A5e015f3518f3A48820644231d186538606FF94",
      iggyPostStatsAddress: "0xDA07Ef226E212f548979339BFEb13160C1d52f30",
      keysAddress: "0x9904CE72Cd7427F59bBe53bc69211081159fcf0a", // FriendKeys contract address 
      keysContext: "kjzl6cwe1jw146hahweqyxj4lwx0ffppekru48wiedk11nch15bg1ygmwfdz0cs",
      keysFeatured: ["admin", "tempe", "tekr"],
      linkPreviews: "", // "netlify" or "microlink" (or leave empty for no link previews)
      lpTokenAddress: "", // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: "LP tokens", // LP token symbol
      marketplacePostNftUrl: "https://opensea.io/assets/base/0x8032d7a2b57B3F46861b0A46cE43DEc8281471C5",
      marketplacePostNftItemUrl: "https://opensea.io/assets/base/0x8032d7a2b57B3F46861b0A46cE43DEc8281471C5/", // url (append nft id to it)
      marketplaceNftCollectionBaseUrl: "https://opensea.io/assets/base/", // url (append nft address to it)
      maxImageUploadSizeMb: 1, // max image upload size in MB
      newsletterLink: "",
      nftDefaultRatio: 1, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: "0xe7d4643aEB94117D9c2bc023aa28243264D448eE", // NFT launchpad with bonding curve contract address
      nftLaunchpadLatestItems: 8, // number of latest NFTs to show in the NFT launchpad
      nftOrbisContext: "kjzl6cwe1jw145x3vl4u9xe2ymk7b9yeed5zj4rztha58vj2h7wiu7jg9sau018", // Orbis context for NFT collection pages
      orbisCategories: [ // use only alphanumeric ASCII characters for slugs! (no spaces, only dash is allowed)
        { "slug": "all", "title": "All posts", "hidden": false }, // not a real tag, just denotes the absence of a tag (always keep it here)
        { "slug": "general", "title": "General discussion", "hidden": false },
        { "slug": "gm", "title": "GM/GN", "hidden": true },
        { "slug": "shill", "title": "Shill & discuss projects", "hidden": true },
        { "slug": "nfts", "title": "Memes & NFTs", "hidden": false }, // keep this category for the purpose of the NFT launchpad
        { "slug": "governance", "title": "Governance", "hidden": true },
        { "slug": "food", "title": "Food & recipes", "hidden": true },
        { "slug": "movie", "title": "Movies & Music", "hidden": true },
        { "slug": "music", "title": "Music", "hidden": true },
        { "slug": "random", "title": "Random", "hidden": false },
      ],
      orbisContext: "kjzl6cwe1jw1491eu80t52tz6rqtxrt94jlekb6gwxm241zfxbf9apq7fqrhyv3", // production context
      orbisTest: false, // if true, test context will be used instead of the production one
      orbisTestContext: "kjzl6cwe1jw145tfqv2eqv8tiz6puo27meyz4smz40atppuc13tulqca87k35z2", // test context
      previewImage: "/img/cover.jpg",
      previewImageAirdrop: "/img/cover-airdrop.jpg",
      previewImageNftCollection: "/img/cover-nft-collection.jpg",
      previewImageNftCreate: "/img/cover-nft-create.jpg",
      previewImageNftLaunchpad: "/img/cover-nft-launchpad.jpg",
      previewImagePost: "/img/cover-post.jpg",
      previewImagePostNft: "/img/cover-post-nft.jpg",
      previewImageProfile: "/img/cover-profile.jpg",
      previewImageStake: "/img/cover-stake.jpg",
      profileMintedPostIdsMax: 36, // max number of minted post ids to show in the profile page
      projectDescription: "Join the BasePunk NFT community, chat with other BasePunks and earn activity points!",
      projectMetadataTitle: "BasePunk Chat | Web3 Social App For BasePunk NFT Community",
      projectName: "BasePunk Chat",
      projectNftAddress: "0x89290b2FaD76bF4a6Ed9D8066f644d45530FA920", // if a project is NFT community around a specific NFT, enter the NFT address here
      projectTwitter: "https://twitter.com/Punkonbase",
      projectUrl: "https://chat.basepunk.xyz", // without trailing slash!
      punkMinterAddress: "0xB5c4A61D3cAaa0dFFFAC59276DD219dD6Ba3DEFB", // punk domain minter contract address
      punkNumberOfPrices: 6, // number of different prices (based on domain length), usually 1 (price()) or 6 (price1char() - price6char())
      punkTldAddress: "0xc2C543D39426bfd1dB66bBde2Dd9E4a5c7212876", // punk domain TLD address
      randomPostsNumber: 1, // number of random post NFTs to show in the sidebar widget
      rpcCustom: process.env.RPC_CUSTOM || "https://mainnet.base.org", // Custom RPC URL
      showFeatures: { // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        "activityPoints": true, 
        "airdrop": false, 
        "friendKeys": false, 
        "governance": false,
        "newsletter": false, 
        "nftLaunchpad": false, 
        "randomMintedPosts": true, 
        "swap": false, 
        "stake": false, 
        "sendTokens": true, 
        "spotify": false
      }, 
      showRepliesOnHomepage: true, // show replies on the homepage  
      sidebarLeftSticky: true, // make the left sidebar sticky (always visible)
      spotifyPlaylistId: "5y7f2Wxfq49G5KuNQfMPbk", // enter just the ID of the playlist (not the full URL)  
      stakingContractAddress: "", // this is also the stake/gov token address
      stakeTokenSymbol: "BPC", // stake token symbol (governance token symbol)
      supportedChainId: 8453,
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      swapRouterAddress: "0xFECB36E49EAD11f7AEF4781944FF78e97472b2Af", // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || "AIzaSyCLhy2FZduniivfDWAV7wgpGmSnrXBeq-8",
      tldName: ".basepunk",
      tokenAddress: null, // leave null if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: "ETH",
      web3storageKey: process.env.WEB3_STORAGE_KEY || ""
    }
  },
  vite: {
    build: {
      target: ['es2020'] // fix big integer literals error
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'  // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,  // fix nuxt3 process
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ],
        target: "es2020" // fix big integer literals error
      }
    }
  }
})
