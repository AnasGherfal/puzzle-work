<template>
    <v-snackbar :timeout="2000"
                color="primary"
                variant="tonal">
        <template v-slot:activator="{ props }">
            <v-btn color="primary" variant="tonal" class="ma-2" v-bind="props">open</v-btn>
        </template>

        Snackbar with <strong>tonal</strong> variant.
    </v-snackbar>
</template>