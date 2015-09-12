<template>

    <div class="uk-form-horizontal">

        <partial name="settings"></partial>

    </div>

</template>

<script>

    module.exports = {

        inherit: true,

        section: {
            label: 'Settings',
            priority: 0,
            active: 'portfolio'
        }

    };

    window.Site.components['portfolio'] = module.exports;

</script>
