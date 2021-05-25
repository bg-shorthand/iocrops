import DownloadCsvButton from "Components/DownloadCsvButton";
import Chart from "Containers/Chart";
import Date from "Containers/Date";
import Table from "Containers/Table";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <header className={style.header}>
        <h1>IOCROPS CHART TASK</h1>
      </header>
      <main className={style.main}>
        <section className="chart">
          <header>
            <Date />
            <DownloadCsvButton />
          </header>
          <main>
            <Chart />
          </main>
        </section>
        <section className="table">
          <Table className="chart-data-table" />
        </section>
      </main>
    </>
  );
};

export default Main;
