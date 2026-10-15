import {
  BUDGET_RANGES,
  QUARTIERS,
  SURFACE_RANGES,
  TERRAINS_SECTION,
} from "../../data";
import { Button } from "../ui/buttons";
import { SelectGround, SelectOther } from "../ui/select";
import { InputContainer } from "./inputContainer";

export default function FilterGround() {
  return (
    <form className="flex flex-col md:flex-row md:gap-3 gap-1">
      <InputContainer>
        <SelectGround
          firstOpt={TERRAINS_SECTION.allQuartiers}
          Grounds={QUARTIERS}
        />
      </InputContainer>
      <InputContainer>
        <SelectOther
          firstOpt={TERRAINS_SECTION.allSurfaces}
          Tab={SURFACE_RANGES}
        />
      </InputContainer>
      <InputContainer>
        <SelectOther
          firstOpt={TERRAINS_SECTION.allBudgets}
          Tab={BUDGET_RANGES}
        />
      </InputContainer>

      <Button
        label={TERRAINS_SECTION.filterButton}
        className="btn-primary w-full mt-2 md:mt-0"
      />
    </form>
  );
}
