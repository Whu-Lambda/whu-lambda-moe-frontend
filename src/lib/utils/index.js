export function format_time(timestamp) {
    return timestamp.split('.')[0].replace('T', ' ');
}