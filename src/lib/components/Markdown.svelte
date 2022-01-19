<script>
  import MarkdownIt from 'markdown-it';
  import tex from 'markdown-it-texmath';
  import hilight from 'markdown-it-highlightjs';

  export let content;

  const md = new MarkdownIt().enable(['link', 'image']).use(tex).use(hilight);
</script>

{@html md.render(content)}
