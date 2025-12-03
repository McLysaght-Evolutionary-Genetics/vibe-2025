<script lang="ts">
  const ecrSchedule = [
    {
      kind: "single",
      start: "10:30",
      end: "11:00",
      title: "Sign in and coffee/pastries",
      location: "Smurfit institute of genetics - Atrium",
    },
    {
      kind: "session",
      start: "11:00",
      end: "12:30",
      title: "Careers in academia panel - Chair Dr Elle Loughran",
      location: "TCIN - LB11",
      person: "Dr Karen Siu Ting",
      position: null,
      affiliation: "Queen's University Belfast",
      time: "20-25 minutes",
      discussion: [
        {
          person: "Dr Karen Siu Ting",
          position: null,
          affiliation: "Queen's University Belfast",
          link: "https://www.linkedin.com/in/karen-siu-ting-815b341b7/",
        },
        {
          person: "Dr Kevin Daly",
          position: "Assistant Professor",
          affiliation: "UCD",
          link: "https://www.linkedin.com/in/kevin-daly-b5832076/",
        },
        {
          person: "Dr Anthony Redmond",
          position: "Assistant Professor",
          affiliation: "UCD",
          link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwutIIQD_MQ4VzcWmbX9xP4SALzxOVF8iUMA&s",
        },
        {
          person: "Dr Anahit Hovhannisyan",
          position: "Gerda Henkel Fellow",
          affiliation: "TCD",
          link: "https://www.linkedin.com/in/anahit-hovhannisyan-645097256/",
        },
      ],
    },
    {
      kind: "single",
      start: "12:30",
      end: "14:00",
      title: "Lunch and industry mixer",
      location: "Smurfit institute of genetics - Atrium",
    },
    {
      kind: "session",
      start: "14:00",
      end: "15:30",
      title: "Beyond academia panel - Chair Catherine Butt",
      location: "TCIN - LB11",
      person: "Dr Colm Ó Dushlaine",
      position: "Head of Statistical Genetics",
      affiliation: "insitro",
      time: "20-25 minutes",
      discussion: [
        {
          person: "Dr Colm Ó Dushlaine",
          position: "Head of Statistical Genetics",
          affiliation: "insitro",
          link: "https://www.linkedin.com/in/codushlaine/",
        },
        {
          person: "Dr Eppie Jones",
          position: "Bioinformatician",
          affiliation: "St James's Hospital, Dublin",
          link: "https://www.linkedin.com/in/eppie-jones-239889133/",
        },
        {
          person: "Dr Alan Rice",
          position: "Bioinformatician",
          affiliation: "National Virus Reference Laboratory",
          link: "https://www.linkedin.com/in/alanmrice/",
        },
        {
          person: "Dr Hayley Furlong",
          position: "Expert Scientific Writer",
          affiliation: "Novartis",
          link: "https://www.linkedin.com/in/dr-hayley-c-furlong/",
        },
      ],
    },
    {
      kind: "single",
      start: "15:30",
      end: "15:40",
      title: "Closing remarks",
      location: "TCIN - LB11",
    },
  ];
</script>

<section>
  <div class="container mx-auto mt-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">
      ECR Meeting Program <span class="text-fuchsia-900/50">(9th December)</span>
    </h2>
    {#each ecrSchedule as item}
      {#if item.kind === "single"}
        <div class="mt-2 flex flex-col-reverse justify-between bg-fuchsia-50 lg:flex-row xl:mx-40">
          <div class="mx-2 lg:w-120">
            <p>
              {item.start}{item.end == null || item.end.length === 0 ? "" : "-"}{item.end}
              {#if item.location}
                <span class="text-muted-foreground"> • {item.location}</span>
              {/if}
            </p>
          </div>
          <div class="mx-2 lg:w-100">
            <p class="font-bold">{item.title}</p>
          </div>
        </div>
      {/if}
      {#if item.kind === "session"}
        <br />
        <div class="mt-2 flex flex-col-reverse justify-between lg:flex-row xl:mx-40">
          <div class="mx-2 hidden lg:block">
            <p>
              {item.start}-{item.end}
              {#if item.location}
                <span class="text-muted-foreground"> • {item.location}</span>
              {/if}
            </p>
          </div>
          <div class="mx-2 rounded-md lg:w-100">
            <p class="mb-1 font-bold">{item.title}</p>
            <div class="mb-2 h-1 w-8/10 bg-fuchsia-400"></div>
            <p>Opening talk</p>
            <p class="text-muted-foreground">{item.person} | {item.time}</p>
            <br />
            {#each item.discussion as panel}
              <div class="flex justify-start">
                <div>
                  <a
                    class="focus:outline-0"
                    class:underline={panel.link}
                    class:hover:text-fuchsia-800={panel.link}
                    class:hover:decoration-3={panel.link}
                    class:focus:bg-fuchsia-300={panel.link}
                    class:focus:decoration-3={panel.link}
                    class:focus:text-black={panel.link}
                    href={panel.link}>{panel.person}</a
                  >
                  <p class="text-muted-foreground">
                    {panel.position == null ? "" : panel.position + ", "}{panel.affiliation}
                  </p>
                </div>
              </div>
            {/each}
            <br />
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>
