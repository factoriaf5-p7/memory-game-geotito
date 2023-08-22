import {Game} from "@/components";
import {render,screen} from '@testing-library/react';
import {
  MemoryRouter,
} from "react-router-dom";

describe('Game Page',()=>{
    beforeEach(()=>{
        render(<MemoryRouter initialEntries = {["/game"]}>
          <Game/>
        </MemoryRouter>)
    });
    test('text Game should be render',()=>{
        expect(screen.getByText(/game/i)).toBeInTheDocument();
    })
})