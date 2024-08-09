<script>
    import "bulma/css/bulma.min.css";
    import { onMount, setContext } from "svelte";
    import { handleWalletError, handleWalletInfo } from "./lib/js/main";
    import { updateCurrentCounter } from "./lib/js/node";
    // @ts-ignore
    import XianWalletUtils from "./lib/js/xian-dapp-utils";
    import Nav from "./lib/svelte-components/Nav.svelte";
    import Section from "./lib/svelte-components/Section.svelte";

    let xdu;

    onMount(async ()=>{
        XianWalletUtils.init('https://testnet.xian.org');

        const info = await XianWalletUtils.requestWalletInfo().catch(handleWalletError);
        handleWalletInfo(info);

        await updateCurrentCounter()
        // store XianWalletUtils instance
        xdu = XianWalletUtils
    });  

    setContext('app_functions', {
        xdu: () => {
          return xdu
        }
    })
</script>

<main>
  <Nav/>
  <Section/>
</main>
