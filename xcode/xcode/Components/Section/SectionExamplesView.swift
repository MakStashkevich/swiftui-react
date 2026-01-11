
import SwiftUI

struct SectionExamplesView: View {
    var body: some View {
        List {
            Section(header: Text("Section 1 Header"), footer: Text("Section 1 Footer")) {
                Text("Item A")
                Text("Item B")
            }
            
            Section {
                Text("Item C")
                Text("Item D")
            } header: {
                Text("Section 2 Header")
            } footer: {
                Text("Section 2 Footer")
            }
        }
        .navigationTitle("Section Examples")
    }
}

struct SectionExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        SectionExamplesView()
    }
}
