export function Education() {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-bold border-b border-border pb-1 mb-3">
        EDUCATION
      </h2>
      <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
          <div >
            <h3 className="font-semibold text-primary">
              B.Tech Computer Science and Engineering
            </h3>
            <p className="text-secondary-foreground">Jain University</p>

          </div>
          <div className="text-left md:text-right">
            <p className="text-muted-foreground">Sep 2023 - Apr 2027</p>
            <p className="text-secondary-foreground">Current Cgpa: 9.4</p>
          </div>
        </div>
      </div>
    </section>
  );
}
