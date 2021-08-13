import type { CommandInteraction } from "discord.js";
import type { SlashCommand } from "src/@types";

export const recipe: SlashCommand['recipe'] = {
    name: 'ping',
    description: 'Am I alive?',
    type: 'CHAT_INPUT'
}

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    interaction.reply({ content: 'I guess?' });
}