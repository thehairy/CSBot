import type { Collection, ApplicationCommandData, MessageApplicationCommandData, CommandInteraction, ContextMenuInteraction, UserApplicationCommandData } from 'discord.js';
import translate from 'google-translate-api';

declare module 'discord.js' {
  interface Client {
    slashybois: Collection<string, SlashCommand>;
    contextybois: Collection<string, ContextCommand>;
    eventybois: Collection<string, Event>;
    owner: string;
  }
}

interface SlashCommand {
    recipe: ApplicationCommandData;
    ownerOnly: boolean;
    cook(interaction: CommandInteraction): Promise<void>;
}

interface ContextCommand {
    recipe: MessageApplicationCommandData | UserApplicationCommandData;
    cook(interaction: ContextMenuInteraction): Promise<void>;
}

interface Event {
    name: string;
    once?: boolean;
    cook(...args: unknown[]): Promise<void>;
}