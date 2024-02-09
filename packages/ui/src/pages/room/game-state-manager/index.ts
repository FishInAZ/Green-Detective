import * as _ from 'lodash';

import type { IVisualGameState, TRoomState, TAvailableRoom, THistoryResults } from '@avalon/types';
import { Ref, computed, ref, provide, InjectionKey } from 'vue';
import { TPageRoomStateRef, TStartedPageRoomState } from '@/pages/room/game-state-manager/interface';

export const gameStateKey = Symbol() as InjectionKey<Ref<IVisualGameState>>;
export const stateManagerKey = Symbol() as InjectionKey<GameStateManager>;

export * from '@/pages/room/game-state-manager/interface';

export class GameStateManager {
  state: TPageRoomStateRef;
  game: Ref<IVisualGameState>;
  viewMode: Ref<'live' | 'history'> = ref('live');

  constructor() {
    this.state = ref() as TPageRoomStateRef;

    this.game = computed(() => {
      if (this.state.value.stage === 'started') {
        return this.state.value.gameStates[this.state.value.pointer];
      }
    }) as Ref<IVisualGameState>;

    provide(gameStateKey, this.game);
    provide(stateManagerKey, this);
  }

  moveToNextStage(): void {
    if (this.state.value.stage === 'started') {
      if (this.state.value.pointer === this.state.value.gameStates.length - 1) {
        return;
      }

      this.state.value.pointer += 1;
    }
  }

  moveToPrevStage(): void {
    if (this.state.value.stage === 'started') {
      if (this.state.value.pointer === 0) {
        return;
      }

      this.state.value.pointer -= 1;
    }
  }

  mutateRoomState({
    newRoomState,
    newGameState,
    userID,
  }: {
    newRoomState?: TRoomState;
    newGameState?: IVisualGameState;
    userID?: string;
  }): void {
    if (userID) {
      if (newRoomState) {
        if (newRoomState.stage !== 'unavailable') {
          this.mutateRoomGameForPosition(newRoomState, userID);
        }

        if ('game' in newRoomState) {
          this.mutateRoomGameForPosition(newRoomState.game, userID);
        }
      }

      if (newGameState) {
        this.mutateRoomGameForPosition(newGameState, userID);
      }
    }

    if (newRoomState) {
      if (newRoomState.stage === 'started') {
        const game = newRoomState.game;

        this.state.value = {
          ...newRoomState,
          pointer: 0,
          gameStates: [],
        };

        this.generateGameStatesFromHistory(this.state.value.gameStates, game.history, game);
        this.state.value.pointer = this.state.value.gameStates.length - 1;
      } else {
        this.state.value = {
          ...newRoomState,
        };
      }
    }

    if (newGameState && this.state.value.stage === 'started') {
      if (this.state.value.gameStates.length - 1 === newGameState.history.length) {
        this.state.value.gameStates[this.state.value.gameStates.length - 1] = newGameState;
      } else {
        this.generateGameStatesFromHistory(this.state.value.gameStates, newGameState.history, newGameState);
      }
    }
  }

  generateGameStatesFromHistory(
    gameStates: IVisualGameState[],
    history: THistoryResults[],
    newState: IVisualGameState,
  ): void {
    while (gameStates.length - 1 !== history.length) {
      const state = _.cloneDeep(newState);
      const prevState = gameStates[gameStates.length - 1];

      if (prevState) {
        prevState.history = history.slice(0, gameStates.length);
      }

      gameStates.push(state);
    }
  }

  toggleViewMode(): void {
    if (this.state.value.stage === 'started') {
      if (this.viewMode.value === 'history') {
        this.viewMode.value = 'live';
        this.state.value.pointer = this.state.value.gameStates.length - 1;
      } else {
        this.viewMode.value = 'history';
      }
    }
  }

  getStartedRoomState(): Ref<TStartedPageRoomState> {
    if (this.state.value.stage !== 'started') {
      throw new Error('You cant get started room state');
    }

    return this.state as Ref<TStartedPageRoomState>;
  }

  protected mutateRoomGameForPosition<T extends TAvailableRoom | IVisualGameState>(roomOrGame: T, userID?: string): T {
    if (userID) {
      const indexOfPlayer = roomOrGame.players.findIndex((player) => player.id === userID);

      if (indexOfPlayer !== -1) {
        roomOrGame.players = [
          ...roomOrGame.players.slice(indexOfPlayer),
          ...roomOrGame.players.slice(0, indexOfPlayer),
        ];
      }
    }

    return roomOrGame;
  }
}