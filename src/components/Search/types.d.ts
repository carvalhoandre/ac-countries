import { ICountrie } from "../../../../../../types/countries";

interface ISearchProps {
  onChange: (countries: Array<ICountrie> | []) => void;
}
