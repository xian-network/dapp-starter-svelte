<script>
    import { walletAddressElementValue } from "../store";
</script>
<nav class="navbar" aria-label="main navigation">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <strong>Xian dApp Starter</strong>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item" href="/" id="wallet-address">
                    {$walletAddressElementValue}
                </a>
            </div>
        </div>
    </div>
</nav>