export default function Home() {
  return <div className="flex min-h-screen flex-col bg-white">
    <main className="flex-1">
      {/* Hero section */}
      <section className="container mx-auto px-4 py-32">
        <div>
          <h1 className="text-black">Kanban board</h1>
          <p className="text-muted-foreground">A complete kanban board with mongoDB database integration</p>
        </div>
      </section>
    </main>
  </div>
}
