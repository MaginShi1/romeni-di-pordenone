# Romeni di Pordenone

Website of the Associazione Culturale Ricreativa «Romeni di Pordenone» (ARP), in Romanian and Italian.

Plain static site: `index.html`, `styles.css`, `script.js` and `assets/`. No build step.

## Updating the site

Everything that changes often lives at the top of `script.js`:

- `CONFIG`: Facebook link, email, phone, WhatsApp number.
- `EVENTS`: upcoming events. Each has a date (`YYYY-MM-DD`) and texts in `ro` and `it`.
  An event disappears automatically the day after its date; with no upcoming events the page
  shows a "follow us on Facebook" message.
- `I18N`: every text on the page, in Romanian (`ro`) and Italian (`it`).

Past events ("Din activitatea noastră") are in `index.html`, with their texts in `I18N`.

## Preview locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.
