export type View = "card" | "table"; 

export interface IActionsIconProps {
    view: View;
    handleUpdateView: (view: View) => void;
}
