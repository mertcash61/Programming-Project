<template>
  <div class="language-card">
    <h2>{{ language.name }}</h2>
    <div class="language-content">
      <p>{{ language.description }}</p>
      <div class="code-example">
        <pre><code>{{ language.codeExample }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageCard',
  props: {
    language: {
      type: Object,
      required: true
    }
  }
}
</script> 