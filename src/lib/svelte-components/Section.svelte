<script>
    import { getContext } from 'svelte';
    
    import { counterValue } from "../store";
    import { handleTransaction, handleTransactionError } from "../js/main";

    const { xdu } = getContext('app_functions');
    
    const sendTransaction = async() => {
        const response = await xdu().sendTransaction("con_counter", "increment_counter", {}).catch(handleTransactionError)
        handleTransaction(response)
    };
    
</script>

<section class="section">
    <div class="container">
        <h1 class="title">
            Decentralized Counter
        </h1>
        <p class="subtitle">
            Everyone can increment the counter by calling the smart contract function <span class="inline-highlite">increment_counter()</span>.
        </p>
        <div class="counter-container">
            <div class="counter">
                <h2 class="title is-2" id="counter-value">{$counterValue}</h2>
                <button class="button is-primary" id="increment-button" on:click={sendTransaction}>Increment</button>
            </div>
        </div>
    </div>
</section>
