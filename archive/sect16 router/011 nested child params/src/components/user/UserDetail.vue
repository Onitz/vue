<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p> <!-- no need to watch without a way to directly navigate between components (bit dodgey) -->
  </div>
</template>