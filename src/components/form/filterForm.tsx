import {
  BUDGET_RANGES,
  QUARTIERS,
  SURFACE_RANGES,
  TERRAINS_SECTION,
  VILLA_TABS,
  type VillaKind,
} from "../../data";
import { Button } from "../ui/buttons";
import { SelectGround, SelectOther } from "../ui/select";
import { InputContainer } from "./inputContainer";

export function FilterGround() {
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

type TabType = "Toutes" | VillaKind;

export function FilterVillas({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (val: TabType) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {VILLA_TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
              isActive
                ? "bg-brand-primary text-white shadow-sm"
                : "bg-white text-brand-primary border border-slate-200 hover:border-brand-primary/30"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
