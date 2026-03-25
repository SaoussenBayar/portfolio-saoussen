export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-4">
        Saoussen Rzig — Full Stack Developer
      </h1>

      <p className="mb-6">
        Développeuse Symfony / Angular / Flutter passionnée par la création
        d&apos;applications performantes.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Mes projets</h2>

      <div className="mt-4 space-y-4">
        <div className="border p-4 rounded">
          <h3 className="font-bold">Application Mobile Bien-Être</h3>
          <p>Développée avec Flutter et Firebase — publiée sur Google Play.</p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold">Application Web Symfony + Angular</h3>
          <p>API REST + interface CRUD.</p>
        </div>
      </div>
    </main>
  );
}