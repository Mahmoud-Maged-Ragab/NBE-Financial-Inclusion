# Team photos

Put team member photos in this folder, then point at them from
`src/lib/teamMembers.ts`:

```ts
image: "/team/member-1.jpg"
```

- The path is relative to `/public`, so `public/team/member-1.jpg`
  is written as `/team/member-1.jpg`.
- Square or portrait photos work best — they are cropped to a 4:5 frame.
- Around 600 x 750 px is plenty.
- `.jpg`, `.png` and `.webp` all work.

`placeholder.svg` is the neutral avatar used until real photos are added.
If a photo is missing or the path is wrong, the card falls back to a neutral
avatar instead of showing a broken image.
