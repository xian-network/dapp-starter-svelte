<script>
    import "bulma/css/bulma.min.css";
    import { onMount } from "svelte";
    import { handleWalletError, handleWalletInfo } from "./lib/js/main";
    import { updateCurrentCounter } from "./lib/js/node";
    import { xianWalletUtilInstance } from "./lib/store";
    // @ts-ignore
    import XianWalletUtils from "./xian-dapp-utils";
    import Nav from "./lib/svelte-components/Nav.svelte";
    import Section from "./lib/svelte-components/Section.svelte";

    onMount(async ()=>{
        XianWalletUtils.init('https://testnet.xian.org');

        const info = await XianWalletUtils.requestWalletInfo().catch(handleWalletError);
        handleWalletInfo(info);

        await updateCurrentCounter()
        //store for later use
        xianWalletUtilInstance.set(XianWalletUtils);
    });   
</script>

<main>
  <Nav/>
  <Section/>
</main>