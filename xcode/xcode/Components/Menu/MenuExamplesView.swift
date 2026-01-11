
import SwiftUI

struct MenuExamplesView: View {
    @State private var selectedOption = "Option 1"

    var body: some View {
        List {
            Menu("Options") {
                Button("Option 1") { selectedOption = "Option 1" }
                Button("Option 2") { selectedOption = "Option 2" }
                Button("Option 3") { selectedOption = "Option 3" }
            }
            Text("Selected: \(selectedOption)")
            
            Menu {
                Button("Action 1") { print("Action 1") }
                Button("Action 2") { print("Action 2") }
            } label: {
                Label("Perform Action", systemImage: "ellipsis.circle")
            }
        }
        .navigationTitle("Menu Examples")
    }
}

struct MenuExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        MenuExamplesView()
    }
}
